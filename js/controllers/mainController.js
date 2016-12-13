// MAIN CONTROLLER
function mainController() {
  this.datas = [];
    this.add = () => {
      if ((this.nom === undefined) || (this.prenom === undefined) || (this.email === undefined)) {
        alert("Veuillez saisir tous les champs");
      } else {
        this.datas.push({nom:this.nom, prenom:this.prenom, email:this.email});
        this.nom ="";
        this.prenom = "";
        this.email = "";
      }
    };

    this.delete = (index) => {
      this.datas.splice(index,1);
    };

    this.update = (index, nom, prenom, email) => {
      this.datas[index].nom = nom;
      this.datas[index].prenom = prenom;
      this.datas[index].email = email;
    };
}
