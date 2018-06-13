module.exports = {
    getBins: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log('req.params.id', req.params.id)
        dbInstance.Read_Bins(req.params.id)
        .then(bins => {res.status(200).send(bins), console.log('get shelf', bins) })
        .catch(err => {console.log('Did not GETBINS',err)});
    },
    getBin: (req, res) => {
        const dbInstance = req.app.get('db');
        const shelf_id = req.params.id[0]
        const bin_id = +req.params.id[1];
        dbInstance.Read_Bin(shelf_id, bin_id)
        // dbInstance.Read_Bin(req.params.shelf_id, req.params.bin_id)
        .then(bin => {res.status(200).send(bin), console.log('get bin', bin) })
        .catch(err => {console.log('Did not GETBIN', err)});
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const shelf_id = req.params.id[0]
        const bin_id = +req.params.id[1];
        dbInstance.Update_Bin(shelf_id, bin_id, req.body.name, +req.body.price, req.body.image)
        .then(bin => res.status(200).send(bin))
        .catch(err => {console.log('Did not UPDATE', err)});
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const shelf_id = req.params.id[0]
        const bin_id = +req.params.id[1];
        dbInstance.Delete_Bin(shelf_id, bin_id)
        .then(bin => res.status(200).send(bin))
        .catch(err => {console.log('Did not DELETE', err)});
    },
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const shelf_id = req.params.id[0]
        const bin_id = +req.params.id[1];
        dbInstance.Create_Bin(shelf_id, bin_id, req.body.name, +req.body.price, req.body.image)
        .then(bin => res.status(200).send(bin))
        .catch(err => {console.log('Did not CREATE', err)});
    }
};