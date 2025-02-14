export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    fill?: boolean;
  }[];
}

// src/types/chartData.ts  
export interface ChartData<T extends keyof ChartType> {  
    labels: string[];  
    datasets: Dataset<T>[];  
}  

export interface Dataset<T extends keyof ChartType> {  
    label: string;  
    data: number[];  
    [key: string]: any; // Allows additional properties based on chart type  
}  

export type ChartType = 'line' | 'bar' | 'doughnut';  

export interface LineChartData extends ChartData<'line'> {  
    datasets: {  
        label: string;  
        data: number[];  
        borderColor: string;  
        fill?: boolean;  
    }[];  
}  

export interface BarChartData extends ChartData<'bar'> {  
    datasets: {  
        label: string;  
        data: number[];  
        backgroundColor: string;  
    }[];  
}  

export interface DoughnutChartData extends ChartData<'doughnut'> {  
    datasets: {  
        label: string;  
        data: number[];  
        backgroundColor: string[];  
    }[];  
}  