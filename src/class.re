let combine = (classes) => Utils.join(" ", classes);

type condition =
  | Ok(string)
  | Option(option(string))
  | OptionCond(bool, option(string))
  | Cond(bool, string);

let combine_conditions = (conditions) =>
  conditions
  |> List.map(
       (cond) =>
         switch cond {
         | Ok(cls) => cls
         | Cond(false, _) => ""
         | Cond(true, cls) => cls
         | Option(Some(cls)) => cls
         | Option(None) => ""
         | OptionCond(false, _)
         | OptionCond(_, None) => ""
         | OptionCond(true, Some(cls)) => cls
         }
     )
  |> List.filter((cls) => cls != "")
  |> combine;
