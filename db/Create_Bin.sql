UPDATE bins SET NAME = $3, price = $4, image = $5 WHERE shelf_id = $1 AND bin_id = $2
returning *;