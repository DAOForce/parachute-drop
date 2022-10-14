type Nullable<T> = T | null;

type Undefinedable<T> = T | undefined;

type NonNullableObj<T> = {
  [K in keyof T]-?: T[K];
};

type DataMap<T> = {
  data: T;
};

interface IParentComponentProps {
  className?: string;
  children: ReactChild;
}

type RouterQuery = Undefinedable<string | string[]>;
