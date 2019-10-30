
const service = require('./image.service');
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
  try {
    const data = await service.find(req.query);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      error: err.message,
    })
  }
});


// router.get('/', async function (req, res) {
//   try {
//     const data = await service.find(req.query);
//     var s="";
//     for(let i=0;i<=52;i++){
//       s=s+'"'+data.data[i]._id+'"'+","+"\r\n";
//       //res.status(200).send(data.data[i]._id);
//     }
//     res.status(200).send(s);
    
//   } catch (err) {
//     res.status(500).send({
//       error: err.message,
//     })
//   }
// });


router.post('/',async function(req,res){
  try{
      const data = await service.create(req.body);
      res.status(200).send({
          data:data,
      });
  }catch(err){
      res.status(500).send({
          error:err.message,
      });
  }
})

var a=["https://i.imgur.com/gzMp3Gl.jpg","https://i.imgur.com/g0CNtF7.png","https://i.imgur.com/XMaUv2z.png","https://i.imgur.com/oFDmuBh.png","https://i.imgur.com/Nvvqh4B.png","https://i.imgur.com/N6Mw1uc.png","https://i.imgur.com/DPHd6f2.png","https://i.imgur.com/cf6QM5Y.png","https://i.imgur.com/vJKvukB.png","https://i.imgur.com/471TQ1I.png","https://i.imgur.com/hmhcsf4.png","https://i.imgur.com/LmVWRtA.png","https://i.imgur.com/YwMshZe.png","https://i.imgur.com/3aiiECh.png","https://i.imgur.com/iukn8v8.png","https://i.imgur.com/QsL7FIB.png","https://i.imgur.com/a1aKgnN.png","https://i.imgur.com/YJWbmz9.png","https://i.imgur.com/hOal8hq.png","https://i.imgur.com/XSZIHt2.png","https://i.imgur.com/WL5D8K5.png","https://i.imgur.com/p2Qu2nd.png","https://i.imgur.com/YznpOvY.png","https://i.imgur.com/qUdiiDV.png","https://i.imgur.com/UkGicQG.png","https://i.imgur.com/HcGJYjj.png","https://i.imgur.com/guxQaSG.png","https://i.imgur.com/yuCGq9k.png","https://i.imgur.com/ZSfwFRF.png","https://i.imgur.com/yDemqX7.png","https://i.imgur.com/ZRKKI2s.png","https://i.imgur.com/pLCms3I.png","https://i.imgur.com/OOYSwGW.png","https://i.imgur.com/3zo1g1v.png","https://i.imgur.com/wJLE7VH.png","https://i.imgur.com/9qNQXjs.png","https://i.imgur.com/Tl75ncg.png","https://i.imgur.com/jdEdju4.png","https://i.imgur.com/xlHwiqZ.png","https://i.imgur.com/fQCcE0X.png","https://i.imgur.com/fs2jf2w.png","https://i.imgur.com/cwfIFbg.png","https://i.imgur.com/7YXpHac.png","https://i.imgur.com/eUUJokV.png","https://i.imgur.com/Lb3Ew6z.png","https://i.imgur.com/fcwbzYn.png","https://i.imgur.com/HXJL1Ap.png","https://i.imgur.com/b8Ctk54.png","https://i.imgur.com/ovjiWEd.png","https://i.imgur.com/oiz8iYl.png","https://i.imgur.com/u4V0Fod.png","https://i.imgur.com/ud6piHW.png","https://i.imgur.com/KcPsrou.png"];

console.log(a.length);

// router.post('/',async function(req,res){
//   try {
//     for(let i=0;i<=52;i++){
//         await service.create({
//         link:`${a[i]}`,
//         chapIndex:"chap 1",
//         mangaName:"One Piece",
//       })
//     }
//     res.send("success");
//   } catch (err) {
//     res.status(500).send({
//       error: err.message,
//     });
//   }
// })

router.put('/:id', async function (req, res) {
  try {
    const data = await service.update(req.params.id, req.body);
    res.status(200).send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

router.delete('/:id', async function (req, res) {
  try {
    const data = await service.delete(req.params.id);
    res.status(200).send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});
// router.delete('/',async function(req,res){
//   try{
//       const data = await service.delete();
//       res.status(200).send({
//           data:data,
//       })
//   }catch(err){
//       res.status(500).send({
//           error:err.message,
//       })
//   }
// })
// router.delete('/', async function (req, res) {
//   try {
//     const data = await service.delete(req.query);
//     res.status(200).send({
//       data: data,
//     });
//   } catch (err) {
//     res.status(500).send({
//       error: err.message,
//     });
//   }
// });

module.exports = router;

