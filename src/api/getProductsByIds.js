async function getProductByIds(ids) {
    const products = [
        {
            id: '00',
            title: 'Брюки Abibas черные',
            price: 4500,
            caregory: 'Брюки',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/98c3784fbc15490daf79a97600fd502f_9366/Bryuki_Firebird_chernyj_ED6897_21_model.jpg',
        },
        {
            id: '01',
            title: 'Брюки Abibas красные',
            price: 4999,
            caregory: 'Брюки',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/fbedf5c56f4f486291f2aac601173a5d_9366/Bryuki_Firebird_krasnyj_FM3814_21_model.jpg'
        },
        {
            id: '02',
            title: 'Брюки Abibas синие',
            price: 4999,
            caregory: 'Брюки',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ad3f37ab1b2f407ab35caaf001252589_9366/Bryuki_Firebird_sinij_FM3813_21_model.jpg',
        },
        {
            id: '10',
            title: 'Кроссовик Abibas Gazzele бежевые',
            price: 7499,
            caregory: 'Обувь',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3b146027ef844e038d28ab0a00a69fbd_9366/Krossovki_Gazelle_zheltyj_EF5599_01_standard.jpg',
        },
        {
            id: '11',
            title: 'Кроссовик Abibas Gazzele чёрные',
            price: 7499,
            caregory: 'Обувь',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/61f87dec481e4512823ea7fb0080ba1a_9366/Krossovki_Gazelle_chernyj_BB5476_01_standard.jpg'
        },
        {
            id: '12',
            title: 'Кроссовик Abibas Gazzele гейские',
            price: 4499,
            caregory: 'Обувь',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/28e054c800ea44a4a8bea7fb007fc05d_9366/Krossovki_Gazelle_rozovyj_BB5472_01_standard.jpg',
        },
        {
            id: '13',
            title: 'Кроссовик Abibas Gazzele красные',
            price: 4499,
            caregory: 'Обувь',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/340aeb9ac43847fea000a8da0182b561_9366/Krossovki_Gazelle_Bordovyj_B41645_01_standard.jpg',
        },
        {
            id: '20',
            title: 'Рубашка Abibas МОСКВА белая',
            price: 2999,
            caregory: 'Рубашка',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/311e9515500441fe93cbabaa00f7d73d_9366/Futbolka_Trefoil_Moskva_belyj_GT7436_01_laydown.jpg',
        },
        {
            id: '21',
            title: 'Рубашка Abibas МОСКВА черная',
            price: 2999,
            caregory: 'Рубашка',
            image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7cb8836d6692428aae8cabaa00f7d76d_9366/Futbolka_Trefoil_Moskva_chernyj_GT7437_01_laydown.jpg',
        }
    ];

    let res = products.filter((product) => ids.includes(product.id));

    return res;
}


export default getProductByIds;
