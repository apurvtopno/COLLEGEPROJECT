$(document).ready(function() {
    // Initialize Select2 for searchable dropdown
    $('#team-members').select2({
        placeholder: "Search for workers",
        allowClear: true
    });

    // Handle form submission for creating a team
    $('#createTeamForm').on('submit', function(event) {
        event.preventDefault();

        const teamName = $('#team-name').val();
        const teamLeader = $('#team-leader').val();
        const teamMembers = $('#team-members').val();

        // Ensure the team has no more than 15 members
        if (teamMembers.length > 15) {
            alert('A team can have a maximum of 15 members.');
            return;
        }

        // Display created team
        const teamCard = `
            <div class="team-card">
                <h3>Team: ${teamName}</h3>
                <p>Team Leader: Batch #${teamLeader}</p>
                <p>Members:</p>
                <ul class="team-members">
                    ${teamMembers.map(member => `<li>${member}</li>`).join('')}
                </ul>
            </div>
        `;

        $('#team-list').append(teamCard);

        // Reset the form
        $('#createTeamForm')[0].reset();
        $('#team-members').val([]).trigger('change');
    });
});
