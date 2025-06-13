// Dark mode toggle (optional button in future)
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
  document.body.classList.add('dark-mode');
}

// Simulated transaction chart
window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('profitChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Weekly Profit ($)',
        data: [120, 300, 250, 410, 200, 450, 600],
        backgroundColor: 'rgba(56, 189, 248, 0.2)',
        borderColor: '#38bdf8',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#dc2626',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: document.body.classList.contains('dark-mode') ? '#f1f5f9' : '#1e293b'
          }
        },
        x: {
          ticks: {
            color: document.body.classList.contains('dark-mode') ? '#f1f5f9' : '#1e293b'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: document.body.classList.contains('dark-mode') ? '#f1f5f9' : '#1e293b'
          }
        }
      }
    }
  });
});
