
import laptop from "../models/Laptop.js";

const laptopController = {
       getAll : async (req,res) => {
     try {
       const data = await laptop.findAll({
        attributes : ['kode','merk','kondisi','keterangan', 'peminjaman']
      })
       res.json(data)

       
     } catch (error) {
        res.status(404).json({msg : error})

        
     }
        
       },
       getId : async (req,res) => {
        try {
          const data = await laptop.findAll({
            attributes : ['kode','merk','kondisi','keterangan', 'peminjaman'],
            where : { id : req.params.id}
         })
           res.json(data)
    
           
         } catch (error) {
            res.status(404).json({msg : error})
    
            
         }
           
       },
       input : async (req,res) => {

        try {
          const data = await laptop.create(req.body)
          res.status(201).json({ msg : "sukses" })
          
           
        } catch (error) {
          res.status(404).json({msg : error})
           
        }
           
       },
       update : async (req,res) => {
        try {
          const data = await laptop.update(req.body,{
            where : { id : req.params.id}
          })
          res.status(201).json({ msg : "sukses" })
        } catch (error) {
          res.status(404).json({msg : error})
        }
           
       },
       delete : async (req,res) => {

        try {
             const data = await laptop.destroy({
            where : { id : req.params.id}
          })
          res.status(201).json({ msg : "sukses" })
          
        } catch (error) {
          res.status(404).json({msg : error})
        }
           
       },
}

export default laptopController