
// missing implementation for check in/ check out/ edit material/ transfer material/ set stock

export const newMaterial = (name, type,status, stock, uom, price, deliveryDate, barcode) => {
    return {
        type: 'NEW_MATERIAL',
        name: name,
        materialType: type,
        status: status,
        stock: stock,
        uom: uom,
        price: price,
        deliveryDate: deliveryDate,
        barcode: barcode
    };
};

export const deleteMaterial = (id) => {
    return {
        type: 'DELETE_MATERIAL',
        id: id
    };
};