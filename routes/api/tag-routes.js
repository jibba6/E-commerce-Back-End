const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const data = await Tag.findAll({
    include:[{model:Product,through:ProductTag}]
  })
  res.json(data)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const data = await Tag.findByPk(req.params.id, {
    include:[{model:Product, through:ProductTag}]
  })
  res.json(data)
});

router.post('/', async (req, res) => {
  // create a new tag
  const createTag = await Tag.create(req.body)
  res.json(createTag)
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(req.body,{where:{id:req.params.id}})
  res.json(updateTag)
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const deleteTag = await Tag.destroy({where:{id:req.params.id}})
  res.json(deleteTag)
});

module.exports = router;
