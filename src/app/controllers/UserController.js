// import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: "User already existis." });
    }

    // const user = await User.create(req.body);

    // return res.json(user);

    const { id, name, email, provider } = await User.create(req.body);
    // "name": "Diego Fernandes",
    // "email": "diego3@rocketseat.com.br",
    // "password_hash": "12432151235"

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    console.log(req.userId);
    return res.json({ok: true});
  }

}
export default new UserController();



    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   email: Yup.string()
    //     .email()
    //     .required(),
    //   password: Yup.string()
    //     .required()
    //     .min(6),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.sataus(400).json({ error: 'Validation fails' });
    // }

    // if (!(await schema.isValid(req.body))) {
    //   return res.sataus(400).json({ error: 'Validation fails' });
    // }

    // const userExists = await User.findOne({ where: { email: req.body.email } });

    // if (userExists) {
    //   return res.status(400).json({ error: 'user already exists.' });
    // }



    // const { id, name, email, provider } = await User.create(req.body);

    // return res.json({
    //   id,
    //   name,
    //   email,
    //   provider,
    // });


//   async update(req, res) {
//     // console.log(req.userId);
//     const schema = Yup.object().shape({
//       name: Yup.string(),
//       email: Yup.string().email(),
//       oldPassword: Yup.string().min(6),
//       password: Yup.string()
//         .min(6)
//         .when('oldPassword', (oldPassword, field) =>
//           oldPassword ? field.required() : field
//         ),
//       confirmPassword: Yup.string().when('password', (password, field) =>
//         password ? field.required().oneOf([Yup.ref('password')]) : field
//       ),
//     });

//     if (!(await schema.isValid(req.body))) {
//       return res.sataus(400).json({ error: 'Validation fails' });
//     }

//     const { email, oldPassword } = req.body;

//     const user = await User.findByPk(req.userId);

//     if (email !== user.email) {
//       const userExists = await User.findOne({ where: { email } });
//       if (userExists) {
//         return res.status(400).json({ error: 'user already exists.' });
//       }
//     }

//     if (oldPassword && !(await user.checkPassword(oldPassword))) {
//       return res.status(401).json({ error: 'Password does not match' });
//     }

//
//   }
// }
