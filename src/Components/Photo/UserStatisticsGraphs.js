import React from 'react'
import styles from './UseStatisticsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'
const UserStatisticsGraphs = ({ data }) => {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        const graphData = data.map(item => {
            return {
                x: item.title,
                y: Number(item.acessos)
            }
        })

        if (data.length >= 1) {
            setTotal(data?.map(({ acessos }) => Number(acessos))?.reduce((a, b) => a + b));
            setGraph(graphData);
        }

    }, [data])

    if (!data.length >= 1) return <p className={`${styles.total} ${styles.graphItem}`}>Nenhum dado disponível.</p>
    return (
        <section className={`animeleft ${styles.graph}`}>
            <div className={`${styles.total} ${styles.graphItem}`}>
                <p>Acessos: {total}</p>
            </div>
            <div className={`${styles.graphItem}`}>
                <VictoryPie
                    data={graph}
                    innerRadius={50}
                    padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                    style={{
                        data: {
                            fillOpacity: .9,
                            stroke: '#FFF',
                            strokeWidth: 2,
                        },
                        labels: {
                            fontSize: 14,
                            fill: '#333'
                        }
                    }}
                />
            </div>
            <div className={`${styles.graphItem}`}>
                <VictoryChart>
                    <VictoryBar data={graph} alignment='start'></VictoryBar>
                </VictoryChart>
            </div>
        </section>
    )
}

export default UserStatisticsGraphs