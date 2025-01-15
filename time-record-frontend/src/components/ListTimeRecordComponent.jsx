import React from 'react'

const ListTimeRecordComponent = () => {

    const dummyData = [
        {
            "id":1,
            "startDate":"2025-01-15",
            "startTime":"19:30",
            "endDate":"2025-01-15",
            "endTime":"20:00",
            "title":"title test 1",
            "memo":"memo test 1",
            "userId":1
        },
        {
            "id":2,
            "startDate":"2025-01-15",
            "startTime":"09:30",
            "endDate":"2025-01-15",
            "endTime":"12:00",
            "title":"title test 2",
            "memo":"memo test 2",
            "userId":1
        },
        {
            "id":3,
            "startDate":"2025-01-15",
            "startTime":"20:30",
            "endDate":"2025-01-15",
            "endTime":"21:00",
            "title":"title test 3",
            "memo":"memo test 3",
            "userId":1
        }
    ]

  return (
    <div>
        <h2>Today</h2>
        {
            dummyData.map(record => 
                <div key={record.id}>
                    <h3>{record.title}</h3>
                    <h5>{record.startTime} - {record.endTime}</h5>
                </div>
            )
        }
    </div>
  )
}

export default ListTimeRecordComponent