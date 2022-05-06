import mfe3Config from "mfe3/config";

const serviceRegister = (store) => {
  console.log("Service Register - mfe3Config", mfe3Config);
  store.dispatch("serviceRegister/addService", mfe3Config);
};

export default serviceRegister;
