import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './Gitstats.css';

const Gitstats = () => {
  const [stats, setStats] = useState([]);
  const [graphData, setGraphData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch GitHub stats
    axios.get('https://api.github.com/users/RSarvjyoti')
      .then(response => {
        setStats([
          { title: 'Repositories', value: response.data.public_repos },
          { title: 'Followers', value: response.data.followers },
          { title: 'Following', value: response.data.following },
          { title: 'Stars', value: response.data.public_repos } // Placeholder for stars
        ]);

        // Fetch additional data for the graph
        axios.get('https://api.github.com/users/RSarvjyoti/events')
          .then(eventResponse => {
            const commits = eventResponse.data.filter(event => event.type === 'PushEvent');
            const labels = commits.map(commit => new Date(commit.created_at).toLocaleDateString());
            const data = commits.map(commit => commit.payload.commits.length);

            setGraphData({
              labels,
              datasets: [{
                label: 'Commits Over Time',
                data,
                backgroundColor: '#ffa116', // Orange background
                borderColor: '#ffa116', // Orange border
                borderWidth: 2,
                hoverBackgroundColor: '#ff8c00', // Darker orange on hover
                hoverBorderColor: '#ff8c00' // Darker orange border on hover
              }]
            });
            setLoading(false);
          })
          .catch(err => {
            setError('Failed to fetch graph data');
            setLoading(false);
          });
      })
      .catch(err => {
        setError('Failed to fetch GitHub stats');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center"><div className="spinner-border" role="status"></div></div>;
  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <div className="container gitstats-container">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Github Stats
        </h2>
        <hr />
      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card gitstats-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{stat.title}</h5>
                <p className="card-text">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 mt-4">
          <div className="card gitstats-card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Commits Over Time</h5>
              <div className="chart-container">
                <Bar data={graphData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        font: {
                          size: 14,
                          weight: 'bold'
                        },
                        color: '#333'
                      }
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => `${context.dataset.label}: ${context.raw}`,
                      }
                    }
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        font: {
                          size: 12,
                        }
                      }
                    },
                    y: {
                      grid: {
                        borderDash: [5, 5],
                        borderColor: '#ddd',
                        color: '#f5f5f5',
                      },
                      ticks: {
                        font: {
                          size: 12,
                        }
                      }
                    }
                  }
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gitstats;
