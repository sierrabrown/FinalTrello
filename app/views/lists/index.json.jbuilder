json.array!(@lists) do |list|
	json.partial!("lists/show", :list => list)
end