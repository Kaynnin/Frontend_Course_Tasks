import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import * as S from './styles'
import { format } from 'date-fns'

// CONECTION API
import api from '../../services/api'

// FUNCTION
import isConnected from '../../util/isConnected'

// COMPONENTS
import Header from '../../components/header'
import Footer from '../../components/footer'

// ICONS
import TypeIcons from '../../util/typeIcons'
// import calendaryIcon from '../../assets/Calendary-Icon.png'
// import clockIcon from '../../assets/Clock-Icon.png'

function Task({ match }) {
  const [redirect, setRedirect] = useState(false)
  const [type, setType] = useState()
  const [id, setId] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [done, setDone] = useState(false)

  async function LoadTask() {
    await api.get(`/task/${match.params.id}`).then(response => {
      setType(response.data.type)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDone(response.data.done)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when), 'HH:mm'))
    })
  }

  async function Save() {
    // validation

    if (!title) {
      return alert('Você precisa informar o titulo da tarefa')
    } else if (!description) {
      return alert('Você precisa informar a descrição da tarefa')
    } else if (!type) {
      return alert('Você precisa selecionar o tipo da tarefa')
    } else if (!date) {
      return alert('Você precisa definir a data da tarefa')
    } else if (!hour) {
      return alert('Você precisa definir a hora da tarefa')
    }

    // save button

    if (match.params.id) {
      await api
        .put(`/task/${match.params.id}`, {
          macaddress: isConnected,
          done,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`
        })
        .then(() => setRedirect(true))
    } else {
      await api
        .post('/task/', {
          macaddress: isConnected,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`
        })
        .then(() => setRedirect(true))
    }
  }

  async function Delete() {
    const res = window.confirm('Deseja realmente remover esta tarefa?')
    if (res == true) {
      await api.delete(`/task/${match.params.id}`).then(() => setRedirect(true))
    }
  }

  useEffect(() => {
    if (!isConnected) {
      setRedirect(true)
    }

    LoadTask()
  }, [])

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}

      <Header />
      <S.Form>
        <S.TypeIcons>
          {TypeIcons.map(
            (icon, index) =>
              index > 0 && (
                <button type="button" onClick={() => setType(index)}>
                  <img
                    src={icon}
                    alt="tipo da tarefa"
                    className={type && type != index && 'inative'}
                  />
                </button>
              )
          )}
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input
            type="text"
            placeholder="Título da tarefa"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea
            rows={5}
            placeholder="Detalhes da tarefa"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input
            type="date"
            placeholder="Data da tarefa"
            onChange={e => setDate(e.target.value)}
            value={date}
          />
          {/*<img src={calendaryIcon} alt="Calendario" />*/}
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input
            type="time"
            placeholder="Hora da tarefa"
            onChange={e => setHour(e.target.value)}
            value={hour}
          />
          {/* <img src={clockIcon} alt="Relogio" />*/}
        </S.Input>

        <S.Options>
          <div>
            <input
              type="checkbox"
              checked={done}
              onChange={() => setDone(!done)}
            />
            <span>CONCLUÍDO</span>
          </div>
          {match.params.id && (
            <button type="button" onClick={Delete}>
              EXCLUIR
            </button>
          )}
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>
            SALVAR
          </button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Container>
  )
}

export default Task
