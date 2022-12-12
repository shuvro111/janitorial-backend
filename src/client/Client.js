import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';
import validator from 'validator';

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Please enter valid email address'],
    },
    password: {
      type: String,
    },
    campaignName: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
  },
  { timestamps: true }
);

// encrypt password before saving a model
clientSchema.pre('save', function (next) {
  const client = this;
  // generating hashed password
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(client.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      client.password = hash;

      // proceed to saving the model
      next();
    });
  });
});

export default mongoose.models.Client || mongoose.model('Client', clientSchema);
