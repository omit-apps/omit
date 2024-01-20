declare type Action<
  T = undefined,
  P = undefined,
  R = undefined,
  K = undefined
> = (arg?: T, arg2?: P, arg3?: R, arg4?: K) => void;
