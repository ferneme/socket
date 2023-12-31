import asyncHandler from 'express-async-handler';
import MenuItem from '../models/MenuItem';

// @desc    Create a menu
// @route   POST /api/menu
// @access  Private/admin

export const createdMenu = asyncHandler(async (req, res) => {
  let menu = new MenuItem({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image_url: req.body.image_url,
  });
  menu = await menu.save();

  if (!menu) {
    res.status(404);
    throw new Error('this menu cannot be created');
  }
  res.status(201).json(menu);
});

// @desc    update a menu
// @route   PUT /api/menu:id
// @access  Private/admin

export const updateMenu = asyncHandler(async (req, res) => {
  const { name, category, description, price, image_url } = req.body;
  const menuItemId = req.params.id;

  const menuItem = await MenuItem.findById(menuItemId);
  if (!menuItem) {
    res.status(404);
    throw new Error('Menu item not found');
  }

  menuItem.name = name || menuItem.name;
  menuItem.category = category || menuItem.category;
  menuItem.description = description || menuItem.description;
  menuItem.price = price || menuItem.price;
  menuItem.image_url = image_url || menuItem.image_url;

  const updatedMenuItem = await menuItem.save();
  res.json(updatedMenuItem);
});

// @desc    delete a menu
// @route   DELETE /api/menu:id
// @access  Private/admin

export const deleteMenu = asyncHandler(async (req, res) => {
  const menuItemId = req.params.id;

  const menuItem = await MenuItem.findById(menuItemId);
  if (!menuItem) {
    res.status(404);
    throw new Error('Menu item not found');
  }

  await menuItem.deleteOne();
  res.json({ message: 'Menu item removed' });
});

//@desc   get all menu
//@route  GET /api/menu
//@access public

export const getAllMenu = asyncHandler(async (req, res) => {
  const menus = await MenuItem.find().populate('category');
  if (!menus) {
    res.status(404);
    throw new Error('Menu Not Found');
  }
  res.json(menus);
});

//@desc   get one menu
//@route  GET /api/menu:id
//@access public populate('category')

export const getOneMenu = asyncHandler(async (req, res) => {
  const menus = await MenuItem.findById(req.params.id).populate('category');
  if (!menus) {
    res.status(404);
    throw new Error('Menu Not Found');
  }
  res.json(menus);
});
