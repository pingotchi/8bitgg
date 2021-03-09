import React from 'react';
import { Grid } from '@material-ui/core';
import Portals from './components/Portals/Portals';
import Team from './components/Team/Team';
import GhostsExplorer from './components/GhostsExplorer/GhostsExplorer';
import Section from '../../components/Section';

export default function Main() {

    return (
        <Grid container>
            <Section backgroundColor='rgba(33, 36, 41, .2)'>
                <Portals />
            </Section>
            <Section backgroundColor='rgba(33, 36, 41, .4)'>
                <Team />
            </Section>
            <Section backgroundColor='rgba(33, 36, 41, .6)'>
                <GhostsExplorer />
            </Section>
        </Grid>
    );
}