export default (data) => {
  let errors = {};

  if (!data.name) {
    errors.e1 = "Please enter a name";
  }

  if (!/^[0-9]*$/.test(data.difficulty)) {
    errors.e2 = "It has to be a number";
  }

  if (!/^[0-9]*$/.test(data.duration)) {
    errors.e3 = "It has to be a number";
  }

  return errors;
};
