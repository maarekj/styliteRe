let join = (glue, list) => {
  let rec _join = (list, acc) =>
    switch list {
    | [] => acc
    | [a] => acc ++ a
    | [a, ...rest] => _join(rest, acc ++ a ++ glue)
    };
  _join(list, "")
};
