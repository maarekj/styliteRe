let combine classes => Stylite_utils.join " " classes;

type condition =
  | Ok string
  | Cond bool string;

let combine_conditions conditions =>
  conditions |>
  List.filter (
    fun cond =>
      switch cond {
      | Cond false _ => false
      | _ => true
      }
  ) |>
  List.map (
    fun cond =>
      switch cond {
      | Ok cls => cls
      | Cond _ cls => cls
      }
  ) |> combine;