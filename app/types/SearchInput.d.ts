export interface ISearchInputProps {
  search: string;
  clearSearch: () => void;
  onSearchTextChange: (searchText: string) => void;
  sortByPrice: ({ ascending }: { ascending: boolean }) => void;
}
