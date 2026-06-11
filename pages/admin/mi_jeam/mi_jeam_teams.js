import TeamsService from "../../../shared/services/services_mi_jeam/mi_jeam_teams.service.js";

const TeamsService = new TeamsService();

async function loadTeams() {
    const teams = await TeamsService.get();
    return teams;

}

async function buildTable(params) {
    const teams = await loadTeams();
    const TableBody = document.getElementById('teams-table-only');
    

}