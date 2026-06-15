import { CardResponse } from "../../models/response/EMILIO_response/EMILIO_card.response.js";
import { LabelResponse } from "../../models/response/EMILIO_response/EMILIO_label.response.js";
import HttpService from "../http.service.js";

export default class CardsService extends HttpService {
    //Obtiene tarjeta por ID
    async getCardById(id) {
        const json = await super.get(`/cards/${id}`);
        if (json === null) return null;
        
        return CardResponse.fromJson(json);
    }

    //Obtiene una etiqueta por su ID
    async getLabelById(id) {
        const jsonArray = await super.get(`/labels/${id}`);
        if (!Array.isArray(jsonArray)) return [];

        return jsonArray.map(json => LabelResponse.fromJson(json));
    }

    //Devuelve labelIds
    async getLabelIdWrapper(id) {
        const json = await super.get(`/labels/${id}/ids`);

        return json;
    }

    //Elimina
    async deleteLabelFromCard(cardId, labelId) {

        return await super.delete(`/cards/${cardId}/labels/${labelId}`);
    }
}