const user = {
  username: "DuongHB",
  age: 32,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get: (target, prop) => {
    console.log(`${new Date()} | The value of ${prop} is ${target[prop]}`);
    return target[prop];
  },
  set: (target, prop, value) => {
    console.log(`${new Date()} | Changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
    return true;
  },
});

userProxy.username;