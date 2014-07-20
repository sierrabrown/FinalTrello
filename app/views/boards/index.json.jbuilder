json.array!(@boards) do |board|
	json.partial!("boards/show", :board => board)
end