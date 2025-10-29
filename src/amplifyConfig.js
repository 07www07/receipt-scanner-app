import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json'; // You’ll get this after backend deploy

Amplify.configure(outputs);
