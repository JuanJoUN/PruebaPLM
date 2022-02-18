const express = require('express');
const router = express.Router();

router.get('/registros', (req, res)=>{
    req.getConnection((error, conn)=>{
        conn.query('SELECt * FROM user_data', (error, data)=>{
            if (error){
                res.send(error);
            }else{
                res.render('registros',{
                    users: data
                })
            }
        })
    })
})

router.get('/', (req,res)=>{
    res.render('formRegistro')
})

router.get('/delete/:id', (req,res)=>{
    const user_id = req.params.id;
    req.getConnection((error, conn)=>{
        conn.query('DELETE FROM user_data WHERE id = ?',[user_id],(error, results)=>{
            if (error){
                res.send(error);
            }else{
                conn.query('SELECT * FROM user_data', (error, result)=>{
                    if(error){
                        res.send(error);
                    }else{
                        res.redirect('/registros');
                    }
                })
            }
        })
    })
})

router.post('/register', (req,res)=>{
    const {nombre, apellido, DI_type, DI, email, celular, fecha_nacimiento, file} = req.body;
    req.getConnection((error, conn)=>{
        conn.query('INSERT INTO user_data SET ?',{
            name: nombre,
            last_name: apellido,
            id_type: DI_type,
            id: DI,
            email: email,
            cellphone: celular,
            born_date: fecha_nacimiento,
            file: file
        }, (error, result)=>{
            if (error){
                res.send(error);
            }else{
                res.render('formRegistro')
            }
        })
    })
})
module.exports= router;
