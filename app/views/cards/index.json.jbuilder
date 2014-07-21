json.array!(@cards) do |card|
	json.partial!("cards/show", :card => card)
end