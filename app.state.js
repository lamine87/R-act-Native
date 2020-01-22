const defaultState = {
  contactList: [
    {
      id: 1,
      nom: 'Pierre',
      prenom: 'kiroule',
      avatar: 'http://sitetest.vcchaumontel.fr/images/imag100px/homme.png',
    },
    {
      id: 20,
      nom: 'Jean',
      prenom: 'bouboule',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4wa7RQ3POjQIIQ5yQFclOx1o9UovT-4yXyjIZcfkUJ4e91lIp',
    },
    {
      id: 3,
      nom: 'Marcel',
      prenom: 'quipu',
      avatar: 'http://sitetest.vcchaumontel.fr/images/imag100px/defaut.png',
    },
  ],
  avatarList: {
    femme: 'http://sitetest.vcchaumontel.fr/images/imag100px/femme.png',
    homme: 'http://sitetest.vcchaumontel.fr/images/imag100px/homme.png',
    autre: 'http://sitetest.vcchaumontel.fr/images/imag100px/autre.png',
    defaut: 'http://sitetest.vcchaumontel.fr/images/imag100px/defaut.png',
  }
}

export default defaultState