import { AreaLight, PointLight } from 'lingo3d-react'
import React from 'react'

const LightWall = () => {
    return (
        <>

            <AreaLight
                x={-5817.27}
                y={2863.84}
                z={329.36}
                rotationX={-168.96}
                rotationY={55.73}
                rotationZ={175.14}
                scale={118.65}
                scaleX={141.49}
                scaleY={20.72}
                scaleZ={0.00}
                intensity={1.50}
                color="#ffbd46"
            />
            <AreaLight
                x={2745.16}
                y={2155.35}
                z={-1297.91}
                rotationX={-38.70}
                rotationY={-80.07}
                rotationZ={-34.28}
                scale={53.24}
                scaleX={118.65}
                scaleY={27.49}
                scaleZ={0.00}
                intensity={1.50}
                color="#ffbd46"
            />
            <AreaLight
                x={-3842.77}
                y={1771.98}
                z={-6535.05}
                rotationX={-171.95}
                rotationY={-39.69}
                rotationZ={-170.83}
                scale={53.24}
                scaleX={53.24}
                scaleY={-22.06}
                scaleZ={0.00}
                intensity={1.50}
                color="#ffbd46"
            />
            <AreaLight
                x={-331.43}
                y={1578.26}
                z={-7538.05}
                rotationX={-173.67}
                rotationY={12.13}
                rotationZ={-177.33}
                scale={53.24}
                scaleX={53.24}
                scaleY={-22.06}
                scaleZ={0.00}
                intensity={1.50}
                color="#ffbd46"
            />
            <AreaLight
                x={1483.74}
                y={3156.64}
                z={5759.94}
                rotationX={-8.22}
                rotationY={41.12}
                rotationZ={9.44}
                scale={53.24}
                scaleX={53.24}
                scaleY={-22.06}
                scaleZ={0.00}
                intensity={1.50}
                color="#ffbd46"
            />
            <AreaLight
                x={-331.43}
                y={3254.35}
                z={5947.16}
                rotationX={-7.42}
                rotationY={-33.41}
                rotationZ={-0.10}
                scale={53.24}
                scaleX={53.24}
                scaleY={-22.06}
                scaleZ={0.00}
                intensity={1.50}
                color="#ffbd46"
            />
            <PointLight name="fireLamp" x={-54.54} y={-230.87} z={-2877.70} intensity={3} />
            <PointLight name="lampStreet1" x={31.53} y={-97.85} z={-829.20} intensity={3} />
            <PointLight name="lampStreet2" x={283.20} y={-233.84} z={-1669.20} intensity={3} />
            <PointLight name="lampStreet3" x={995.55} y={98.09} z={-2184.01} intensity={3.00} />
            <PointLight name="lampMan" x={470.85} y={95.59} z={-311.03} intensity={3} />
        </>
    )
}

export default LightWall