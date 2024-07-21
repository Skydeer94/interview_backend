import TypeDocumentDao  from "src/dao/type-document/TypeDocumentDao";

export default {
    async getAllTypesDocuments (){
        const typesDocuments = await TypeDocumentDao.findAllTypesDocuments();
        return typesDocuments.recordset
    }
}