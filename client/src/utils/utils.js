export default class Utils {
  // Prepare bindActionCreators
  static convertClassToFnArray(myClass) {
    var myClassInst = new myClass();
    var myFnNames = Object.getOwnPropertyNames(myClass.prototype);
    var result = {};

    for (let i in myFnNames) {
      result[myFnNames[i]] = myClassInst[myFnNames[i]];
    }
    return result;
  }

  // Manage change
  static handleChange(model, event) {
    const key = event.target.id;
    const value = event.target.value;

    this.setState(...this.state, {
      [model]: {
        ...this.state[model],
        [key]: value
      }
    });
  }

  // Manage change checkbock
  static handleChangeCheck(model, key, event) {
    const value = event.target.checked;

    this.setState(...this.state, {
      [model]: {
        ...this.state[model],
        [key]: value
      }
    });
  }

  // Manage change select
  static handleChangeSelect(model, event) {
    const key = event.target.name;
    const value = event.target.value;

    this.setState(...this.state, {
      [model]: {
        ...this.state[model],
        [key]: value
      }
    });
  }

  // Manage change date
  static handleChangeDate(model, key, value) {
    this.setState(...this.state, {
      [model]: {
        ...this.state[model],
        [key]: value.getTime()
      }
    });
  }
}
