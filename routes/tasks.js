const express = require('express')

const { v4: uuidv4 } = require('uuid')

const router = express.Router()

const taskList = {}

router.get('/', (req, res) => {
	res.json(Object.values(taskList))
})

router.get('/:id', (req, res) => {
	const { id } = req.params

	if (!taskList[id])
		return res.status(404).json({ message: 'Task not foundss' })

	res.json(taskList[id])
})

router.post('/', (req, res) => {
	const id = uuidv4()

	const newTask = { id, ...req.body }

	taskList[id] = newTask

	res.json(newTask)
})

router.put('/:id', (req, res) => {
	const { id } = req.params

	if (!taskList[id])
		return res.status(404).json({ message: 'Task not found' })

	taskList[id] = { id, ...req.body }

	res.json(taskList[id])
})

router.delete('/:id', (req, res) => {
	const { id } = req.params

	if (!taskList[id])
		return res.status(404).json({ message: 'Task not found' })

	const deletedTask = taskList[id]

	delete taskList[id]

	res.json(deletedTask)
})

module.exports = router
