const express = require('express')
const router = express.Router()

const menuController = require('../controllers/Menu')

router.get('/show', menuController.getData)
router.get('/show/:menuId', menuController.getDataByID)
router.post('/create', menuController.createData)
router.delete('/delete/:menuId', menuController.deleteDataByID)
router.put('/edit/:menuId', menuController.updateDataByID)

module.exports = router