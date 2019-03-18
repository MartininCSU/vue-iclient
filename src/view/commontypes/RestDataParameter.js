import i18n from "../../lang";
export default class RestDataParameter {
    constructor(options) {
        this.url = options.url;
        this.dataName = options.dataName;
        this.attributeFilter = options.attributeFilter || null;
        this.name = options.name || i18n.t("commontypes.restData");
    }
}