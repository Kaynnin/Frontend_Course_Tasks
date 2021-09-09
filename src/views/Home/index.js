import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Link, Redirect } from 'react-router-dom'
// CONECTION API
import api from '../../services/api'

//FUNCTIONS

import isConnected from '../../util/isConnected'

// COMPONENTS
import Header from '../../components/header'
import Footer from '../../components/footer'
import FilterCard from '../../components/filterCard'
import TaskCard from '../../components/taskCard'

function Home() {
  const [filterActived, setFilterActived] = useState('all')
  const [tasks, setTasks] = useState([])
  const [redirect, setRedirect] = useState(false)

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/${isConnected}`)
      .then(response => {
        setTasks(response.data)
      })
  }

  function Notification() {
    setFilterActived('late')
  }

  useEffect(() => {
    loadTasks()

    if (!isConnected) {
      setRedirect(true)
    }
  }, [filterActived])

  return (
    <S.Container>
      {redirect && <Redirect to="/qrcode" />}
      <Header clickNotification={Notification} />

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived('all')}>
          <FilterCard title="Todos" actived={filterActived == 'all'} />
        </button>

        <button type="button" onClick={() => setFilterActived('today')}>
          <FilterCard title="Hoje" actived={filterActived == 'today'} />
        </button>

        <button type="button" onClick={() => setFilterActived('week')}>
          <FilterCard title="Semana" actived={filterActived == 'week'} />
        </button>

        <button type="button" onClick={() => setFilterActived('month')}>
          <FilterCard title="Mês" actived={filterActived == 'month'} />
        </button>

        <button type="button" onClick={() => setFilterActived('year')}>
          <FilterCard title="Anos" actived={filterActived == 'year'} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>

      <S.Content>
        {tasks.map(t => (
          <Link to={`/task/${t._id}`}>
            <TaskCard
              type={t.type}
              title={t.title}
              when={t.when}
              done={t.done}
            />
          </Link>
        ))}
      </S.Content>
      <Footer />
    </S.Container>
  )
}

export default Home
