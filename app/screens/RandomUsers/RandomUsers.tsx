import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { UserCard } from '../../components';
import { getRandomUsersRequest } from '../../store/actions';
import styles from './RandomUsersStyles';

const RandomUsers = ({ usersModel, dispatch }: any) => {
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

  const renderHeader = () => <Text style={styles.title}>Random Users</Text>;

  const renderFooter = () => (
    <View style={styles.footerText}>
      {usersModel.moreLoading && <ActivityIndicator />}
      {usersModel.isListEnd && <Text>No more users at the moment</Text>}
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyText}>
      {usersModel.error && <Text>{usersModel.error.message}</Text>}
      {!usersModel.error && (
        <>
          <Text>No Data at the moment</Text>
          <Button onPress={() => requestAPI()} title="Refresh" />
        </>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {usersModel.loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
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

const mapStateToProps = (state: { users: any }) => {
  return {
    usersModel: state.users,
  };
};

export default connect(mapStateToProps)(RandomUsers);
