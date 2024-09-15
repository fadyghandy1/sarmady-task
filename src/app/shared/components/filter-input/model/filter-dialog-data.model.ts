export interface FilterDialogData {
  filterOptions: { name: string; value: string }[];
  renameFiltersMap: { [key: string]: string };
  filterQuery: string;
}
