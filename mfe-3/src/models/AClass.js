import aa from "./aa";

class AClass {
  name = "aaa";

  setName(name) {
    this.name = name;
    aa(name);
  }
}

AClass.METADATA = {
  type: "SPECIAL",
};

export default AClass;
