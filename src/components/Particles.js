import React from 'react'
import Particles from 'react-tsparticles'
import { makeStyles } from '@material-ui/core'

// Icons
import reactIcon from '../Imgs/reactIcon.png'
import html from '../Imgs/html.png'
import css from '../Imgs/css.png'
import mobile from '../Imgs/mobile.png'
import js from '../Imgs/js.png'
import github from '../Imgs/github.png'
import bootstrap from '../Imgs/bootStrap.png'
import footBall from '../Imgs/footBall.png'
import Styles from './Styles'

const Particless = (props) => {
    const classes = Styles()
    return (
        <>
        <Particles
            width={props.width}
            height={props.height}
            canvasClassName={classes.particlesCanvas}
            params={{
                particles: {
                    number: {
                        value: 80,
                        attract: {
                            enable: true,
                            rotateX: 10,
                            rotateY: 10
                          }
                    },
                    move: {
                        enable:true,
                        speed: 1,
                        out_mode: "bounce"
                    },
                    shape: {
                        type: [
                            "image"
                        ],
                        image: [
                            { src: reactIcon, },
                            { src: html,      },
                            { src: css,       },
                            { src: mobile,    },
                            { src: js,        },
                            { src: github,    },
                            { src: bootstrap, },
                            { src: footBall,  }
                        ]
                    },
                    size: {
                        value: 10,
                    },
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onDiv: {
                        elementId: "repulse-div",
                        enable: false,
                        mode: "repulse"
                      },
                      onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                          enable: true,
                          force: 1000
                        }
                      },
                    },
                    modes: {
                        bubble: {
                            distance: 50,
                            duration: 5,
                          },
                    }
                  },
                retina_detect: true
            }}
        />
        </>
    )
}

export default Particless
