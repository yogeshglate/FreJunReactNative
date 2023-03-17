import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Loader, UserCard } from '../../components';
import { appConstants } from '../../constants';
import { getRandomUsersRequest } from '../../store/actions';
import { IRandomUsersProps, TRootState } from '../../types';
import styles from './RandomUsersStyles';

const RandomUsers = ({ usersModel, dispatch }: IRandomUsersProps) => {
  const [page, setPage] = useState(1);

  const requestAPI = () => {
    dispatch(
      getRandomUsersRequest({
        page: page,
        pageSize: 10,
      }),
    );
  };

  const requestAPICallback = useCallback(() => {
    requestAPI();
  }, [page]);

  useEffect(() => {
    requestAPICallback();

    return () => setPage(1);
  }, []);

  useFocusEffect(requestAPICallback);

  const fetchMoreData = () => {
    if (!usersModel.isListEnd && !usersModel.moreLoading) {
      setPage(page + 1);
    }
  };

  const renderHeader = () => (
    <Text style={styles.title}>{appConstants.randomUsers}</Text>
  );

  const renderFooter = () => (
    <View style={styles.footerText}>
      {usersModel.moreLoading && !usersModel.error && <Loader />}
      {usersModel.isListEnd && <Text>{appConstants.noUsers}</Text>}
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyText}>
      {usersModel.error && <Text>{usersModel.error.message}</Text>}
      {!usersModel.error && (
        <>
          <Text>{appConstants.listEmpty}</Text>
          <Button onPress={() => requestAPI()} title={appConstants.refresh} />
        </>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {usersModel.loading ? (
        <Loader size={'large'} />
      ) : (
        <FlatList
          data={usersModel.data}
          renderItem={({ item }) => {
            return <UserCard user={item} />;
          }}
          keyExtractor={item => item.login.uuid}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: TRootState) => {
  return {
    usersModel: state.users,
  };
};

export default connect(mapStateToProps)(RandomUsers);
