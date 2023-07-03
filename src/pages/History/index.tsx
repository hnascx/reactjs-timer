import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started at</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breakfest</td>
              <td>20 minutes</td>
              <td>3 weeks ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Breakfest</td>
              <td>20 minutes</td>
              <td>3 weeks ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Breakfest</td>
              <td>20 minutes</td>
              <td>3 weeks ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Breakfest</td>
              <td>20 minutes</td>
              <td>3 weeks ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Breakfest</td>
              <td>20 minutes</td>
              <td>3 weeks ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Breakfest</td>
              <td>20 minutes</td>
              <td>3 weeks ago</td>
              <td>
                <Status statusColor="yellow">Doing</Status>
              </td>
            </tr>
            <tr>
              <td>Breakfest</td>
              <td>20 minutes</td>
              <td>3 weeks ago</td>
              <td>
                <Status statusColor="red">Interrupted</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
