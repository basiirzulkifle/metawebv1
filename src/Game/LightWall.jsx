import { AreaLight, Group, PointLight } from 'lingo3d-react'
import React from 'react'

const LightWall = () => {
    return (
        <>

            <AreaLight
                x={-4346.90}
                y={3141.58}
                z={329.36}
                rotationX={-137.63}
                rotationY={80.79}
                rotationZ={142.30}
                scale={118.65}
                scaleX={141.49}
                scaleY={20.72}
                scaleZ={0.00}
                intensity={1.50}
                color="#ffbd46"
            />
            <AreaLight
                x={1225.52}
                y={2788.72}
                z={-1775.53}
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
                x={-3902.97}
                y={1812.45}
                z={-4507.61}
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
                z={-5307.18}
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
                x={-1836.34}
                y={3254.35}
                z={5947.16}
                rotationX={-7.42}
                rotationY={-33.41}
                rotationZ={-0.10}
                scale={53.24}
                scaleX={141.30}
                scaleY={-22.06}
                scaleZ={0.00}
                intensity={1.50}
                color="#ffbd46"
            />
            <Group>
                <PointLight name="lake1" x={-879.88} y={70.58} z={-537.70} intensity={3} />
                <PointLight name="lake2" x={-589.39} y={68.77} z={-575.11} intensity={3} />
                <PointLight name="fireLamp" x={-52.17} y={34.17} z={-1014.03} intensity={3} />
                <PointLight name="lampStreet1" x={-4.58} y={231.06} z={1107.91} intensity={3} />
                <PointLight name="lampStreet2" x={278.28} y={45.93} z={190.66} intensity={3} />
                <PointLight name="lampStreet3" x={984.20} y={366.57} z={-287.13} intensity={3.00} />
                <PointLight name="lampMan" x={495.81} y={360.14} z={1587.84} intensity={3} />
            </Group>

        </>
    )
}

export default LightWall