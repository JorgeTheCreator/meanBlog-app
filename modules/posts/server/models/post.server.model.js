'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please fill Post name',
    trim: true
  },
  body: {
    type: String,
    default: '',
    required: 'Hey, Einstein, you forgot to fill the body',
    trim: true
  },
  major: {
    type: String,
    default: '',
    trim: true
  },
  category: {
    type: String,
    default: '',
    required: 'Hey, Einstein, you forgot to pick a category',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Post', PostSchema);
