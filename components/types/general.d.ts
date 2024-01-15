declare type Action<> = () => void;
declare type Action<T> = (arg: T) => void;
declare type Action<T, P> = (arg: T, arg2: P) => void;
declare type Action<T, P, R> = (arg: T, arg2: P, arg3: R) => void;
declare type Action<T, P, R, K> = (arg: T, arg2: P, arg3: R, arg4: K) => void;
