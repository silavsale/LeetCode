let peoples = {
  name: "Bill",
  lastName: "Gates",
  children: [
    {
      name: "Mark",
      lastName: "Zukerberg",
      //   children: "",
    },
    {
      name: "Elon",
      //   children: [
      //     { name: "F19", school: "MIT" },
      //     { name: "ModelY", school: "Shangai" },
      //   ],
    },
    {
      name: "Larry",
      //   children: {
      //     name: "Sergey",
      //     company: "Google",
      //   },
    },
  ],
};

const findPerson = (peoples: any) => {
  peoples.children;
  if (!peoples.children) {
    return;
  }

  peoples.children.forEach((child: any) => {
    findPerson(child);
  });
};

findPerson(peoples);

const eachRecursive = (obj: any): any => {
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      console.log(key);
    }
    if (key == "child")
      // do something...
      console.log("hello");
  }
};

eachRecursive(peoples);
